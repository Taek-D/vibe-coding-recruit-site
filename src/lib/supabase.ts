import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

// Supabase 클라이언트 생성 (변수명은 sb로 통일)
// 환경변수가 없으면 null로 두고, 실제 사용 시점에 에러를 반환한다.
export const sb: SupabaseClient | null =
    supabaseUrl && supabaseAnonKey
        ? createClient(supabaseUrl, supabaseAnonKey)
        : null;

function getSupabaseHost(): string {
    if (!supabaseUrl) {
        return 'missing-url';
    }

    try {
        return new URL(supabaseUrl).host;
    } catch {
        return supabaseUrl;
    }
}

function normalizeSupabaseError(err: unknown): Error {
    const baseError =
        err instanceof Error
            ? err
            : new Error(
                typeof err === 'string'
                    ? err
                    : (err && typeof err === 'object' && 'message' in err && typeof (err as { message: unknown }).message === 'string')
                        ? (err as { message: string }).message
                        : 'Unknown Supabase error'
              );
    const rawMessage = baseError.message || '';
    const isNetworkError = /failed to fetch|fetch failed|networkerror/i.test(rawMessage);

    if (!isNetworkError) {
        return baseError;
    }

    const host = getSupabaseHost();
    const message =
        `Cannot reach Supabase endpoint (${host}). ` +
        'Check NEXT_PUBLIC_SUPABASE_URL and verify the Supabase project is active.';

    return new Error(message);
}

function getSupabaseClient(): SupabaseClient {
    if (!sb) {
        throw new Error(
            'Missing Supabase configuration. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
        );
    }
    return sb;
}

// 타입 정의
export interface Application {
    id?: string;
    job_id: string;
    job_title: string;
    name: string;
    email: string;
    phone: string;
    source: string;
    resume_path: string;
    portfolio_path?: string | null;
    cover_letter?: string | null;
    created_at?: string;
    updated_at?: string;
}

// 파일 업로드 함수
export async function uploadFile(
    file: File,
    path: string
): Promise<{ path: string; error: Error | null }> {
    try {
        const client = getSupabaseClient();

        const { data, error } = await client.storage
            .from('applications')
            .upload(path, file, {
                cacheControl: '3600',
                upsert: false,
            });

        if (error) {
            const normalizedError = normalizeSupabaseError(error);
            console.error('File upload error:', normalizedError);
            return { path: '', error: normalizedError };
        }

        return { path: data.path, error: null };
    } catch (err) {
        const normalizedError = normalizeSupabaseError(err);
        console.error('Unexpected upload error:', normalizedError);
        return { path: '', error: normalizedError };
    }
}

// 업로드된 파일 삭제 함수 (실패 시 롤백용)
export async function deleteFiles(
    paths: string[]
): Promise<{ error: Error | null }> {
    try {
        if (paths.length === 0) {
            return { error: null };
        }

        const client = getSupabaseClient();
        const { error } = await client.storage
            .from('applications')
            .remove(paths);

        if (error) {
            const normalizedError = normalizeSupabaseError(error);
            console.error('File cleanup error:', normalizedError);
            return { error: normalizedError };
        }

        return { error: null };
    } catch (err) {
        const normalizedError = normalizeSupabaseError(err);
        console.error('Unexpected file cleanup error:', normalizedError);
        return { error: normalizedError };
    }
}

// 지원서 제출 함수
export async function submitApplication(
    application: Application
): Promise<{ error: Error | null }> {
    try {
        const client = getSupabaseClient();

        const { error } = await client
            .from('applications')
            .insert(application);

        if (error) {
            const normalizedError = normalizeSupabaseError(error);
            console.error('Application submission error:', normalizedError);
            return { error: normalizedError };
        }

        return { error: null };
    } catch (err) {
        const normalizedError = normalizeSupabaseError(err);
        console.error('Unexpected submission error:', normalizedError);
        return { error: normalizedError };
    }
}
