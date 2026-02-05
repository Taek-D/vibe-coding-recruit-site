import { NextResponse } from 'next/server';

export async function GET() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    return NextResponse.json({
        supabaseUrlExists: !!supabaseUrl,
        supabaseUrlLength: supabaseUrl?.length || 0,
        supabaseUrlPrefix: supabaseUrl?.substring(0, 20) || 'missing',
        supabaseAnonKeyExists: !!supabaseAnonKey,
        supabaseAnonKeyLength: supabaseAnonKey?.length || 0,
        supabaseAnonKeyPrefix: supabaseAnonKey?.substring(0, 20) || 'missing',
        allEnvVars: Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC_')),
    });
}
