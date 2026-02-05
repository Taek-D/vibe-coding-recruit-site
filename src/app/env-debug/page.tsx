"use client";

import { useEffect, useState } from "react";

export default function EnvDebugPage() {
    const [mounted, setMounted] = useState(false);

    // Client-side 환경변수 체크
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    useEffect(() => {
        setMounted(true);
        console.log("=== Environment Variables Debug ===");
        console.log("NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "✅ EXISTS" : "❌ MISSING");
        console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", supabaseAnonKey ? "✅ EXISTS" : "❌ MISSING");

        if (supabaseUrl) {
            console.log("URL Preview:", supabaseUrl.substring(0, 30) + "...");
        }
        if (supabaseAnonKey) {
            console.log("Key Preview:", supabaseAnonKey.substring(0, 30) + "...");
        }
    }, [supabaseUrl, supabaseAnonKey]);

    if (!mounted) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: "monospace" }}>
            <h1>🔍 Environment Variables Debug</h1>

            <div style={{ marginTop: "30px", padding: "20px", background: "#f5f5f5", borderRadius: "8px" }}>
                <h2>Client-Side Check (빌드 타임에 주입됨)</h2>

                <div style={{ marginTop: "20px" }}>
                    <p><strong>NEXT_PUBLIC_SUPABASE_URL:</strong></p>
                    <p style={{ color: supabaseUrl ? "green" : "red", fontSize: "18px", fontWeight: "bold" }}>
                        {supabaseUrl ? "✅ EXISTS" : "❌ MISSING"}
                    </p>
                    {supabaseUrl && (
                        <p style={{ fontSize: "12px", color: "#666", wordBreak: "break-all" }}>
                            Preview: {supabaseUrl.substring(0, 40)}...
                        </p>
                    )}
                </div>

                <div style={{ marginTop: "20px" }}>
                    <p><strong>NEXT_PUBLIC_SUPABASE_ANON_KEY:</strong></p>
                    <p style={{ color: supabaseAnonKey ? "green" : "red", fontSize: "18px", fontWeight: "bold" }}>
                        {supabaseAnonKey ? "✅ EXISTS" : "❌ MISSING"}
                    </p>
                    {supabaseAnonKey && (
                        <>
                            <p style={{ fontSize: "12px", color: "#666" }}>
                                Length: {supabaseAnonKey.length} characters
                            </p>
                            <p style={{ fontSize: "12px", color: "#666", wordBreak: "break-all" }}>
                                Preview: {supabaseAnonKey.substring(0, 40)}...
                            </p>
                        </>
                    )}
                </div>
            </div>

            <div style={{ marginTop: "30px", padding: "20px", background: "#fff3cd", borderRadius: "8px" }}>
                <h3>⚠️ 중요 사항</h3>
                <ul style={{ lineHeight: "1.8" }}>
                    <li>NEXT_PUBLIC_ 환경변수는 <strong>빌드 타임</strong>에 코드에 직접 주입됩니다</li>
                    <li>브라우저 콘솔에서 직접 <code>process.env.NEXT_PUBLIC_*</code>를 입력하면 항상 undefined가 나옵니다</li>
                    <li>이 페이지는 빌드 시 환경변수가 제대로 주입되었는지 확인합니다</li>
                    <li>환경변수 변경 후에는 <strong>반드시 새로운 빌드가 필요</strong>합니다</li>
                </ul>
            </div>

            <div style={{ marginTop: "30px" }}>
                <h3>🔗 API Route 체크</h3>
                <p>서버 사이드에서도 환경변수를 확인하려면:</p>
                <a
                    href="/api/env-check"
                    target="_blank"
                    style={{
                        display: "inline-block",
                        padding: "10px 20px",
                        background: "#0070f3",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "5px",
                        marginTop: "10px"
                    }}
                >
                    /api/env-check 열기
                </a>
            </div>
        </div>
    );
}
