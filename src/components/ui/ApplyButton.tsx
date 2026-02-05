"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { ApplicationForm } from "@/components/ui/ApplicationForm";
import { ApplicationSuccess } from "@/components/ui/ApplicationSuccess";

interface ApplyButtonProps {
    jobTitle: string;
    fullWidth?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function ApplyButton({ jobTitle, fullWidth, size = "lg", className }: ApplyButtonProps) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    const handleSuccess = () => {
        setIsFormOpen(false);
        setIsSuccessOpen(true);
    };

    const handleCloseSuccess = () => {
        setIsSuccessOpen(false);
    };

    return (
        <>
            <Button
                fullWidth={fullWidth}
                size={size}
                className={className}
                onClick={() => setIsFormOpen(true)}
            >
                지원하기
            </Button>

            <Dialog open={isFormOpen} onClose={() => setIsFormOpen(false)}>
                <ApplicationForm
                    jobTitle={jobTitle}
                    onSuccess={handleSuccess}
                    onCancel={() => setIsFormOpen(false)}
                />
            </Dialog>

            <Dialog open={isSuccessOpen} onClose={handleCloseSuccess}>
                <ApplicationSuccess
                    jobTitle={jobTitle}
                    onClose={handleCloseSuccess}
                />
            </Dialog>
        </>
    );
}
