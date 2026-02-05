import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Supabase 클라이언트 생성 (변수명은 sb로 통일)
// 환경변수가 없으면 빈 클라이언트 생성 (빌드 타임 에러 방지)
export const sb = createClient(supabaseUrl, supabaseAnonKey);

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
        if (!supabaseUrl || !supabaseAnonKey) {
            throw new Error('Missing Supabase environment variables');
        }

        const { data, error } = await sb.storage
            .from('applications')
            .upload(path, file, {
                cacheControl: '3600',
                upsert: false,
            });

        if (error) {
            console.error('File upload error:', error);
            return { path: '', error };
        }

        return { path: data.path, error: null };
    } catch (err) {
        console.error('Unexpected upload error:', err);
        return { path: '', error: err as Error };
    }
}

// 지원서 제출 함수
export async function submitApplication(
    application: Application
): Promise<{ data: Application | null; error: Error | null }> {
    try {
        if (!supabaseUrl || !supabaseAnonKey) {
            throw new Error('Missing Supabase environment variables');
        }

        const { data, error } = await sb
            .from('applications')
            .insert(application)
            .select()
            .single();

        if (error) {
            console.error('Application submission error:', error);
            return { data: null, error };
        }

        return { data, error: null };
    } catch (err) {
        console.error('Unexpected submission error:', err);
        return { data: null, error: err as Error };
    }
}
