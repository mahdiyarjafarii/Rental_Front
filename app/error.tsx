'use client';

import EmptyState from "@/src/shared/components/common/EmptyState";
import { useEffect } from "react";



interface ErrorStateProps {
  error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return ( 
    <EmptyState
      title="Uh Oh"
      subtitle="Something went wrong!"
    />
   );
}
 
export default ErrorState;
