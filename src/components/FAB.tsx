import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// React가 제공하는 HTML 버튼의 모든 속성을 상속받습니다.
// 이제 onClick, disabled, id 등을 일일이 적을 필요가 없습니다.
interface FABProps extends ComponentProps<"button"> {
    variant?: "medium" | "large";
}

export function FAB({
    className,
    variant,
    children,
    ...props
}: FABProps) {
    return (
        <button
            {...props}
            className={twMerge(
                "size-[56px] rounded-[20px]",
                "bg-primary-container text-on-primary-container",
                "flex justify-center items-center",
                className
            )}>
            {children}
        </button>
    )
}