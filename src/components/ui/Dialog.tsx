"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

export function Dialog({ open, onClose, children, className }: DialogProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (open) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [open]);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const handleCancel = (e: Event) => {
            e.preventDefault();
            onClose();
        };

        const handleClick = (e: MouseEvent) => {
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (
                rect.top <= e.clientY &&
                e.clientY <= rect.top + rect.height &&
                rect.left <= e.clientX &&
                e.clientX <= rect.left + rect.width
            );

            if (!isInDialog) {
                onClose();
            }
        };

        dialog.addEventListener('cancel', handleCancel);
        dialog.addEventListener('click', handleClick);

        return () => {
            dialog.removeEventListener('cancel', handleCancel);
            dialog.removeEventListener('click', handleClick);
        };
    }, [onClose]);

    return (
        <dialog
            ref={dialogRef}
            className={cn(
                "backdrop:bg-black/50 bg-transparent p-0 max-w-2xl w-full rounded-2xl shadow-2xl",
                "open:animate-in open:fade-in open:zoom-in-95",
                className
            )}
        >
            <div className="bg-white rounded-2xl max-h-[90vh] overflow-y-auto">
                {children}
            </div>
        </dialog>
    );
}
