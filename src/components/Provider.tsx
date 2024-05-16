'use client';
import { useDescription } from '@/store/useDescription';
import { useEffect } from 'react';

const Provider = () => {
    const { setData } = useDescription();
    useEffect(() => {
        setData();
    }, []);

    return <></>;
};
export default Provider;
