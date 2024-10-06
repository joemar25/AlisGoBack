// app/page.tsx
import React from 'react';
import { Landing } from './landing/page';

const Page = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <Landing />
        </main>
    );
};

export default Page;
