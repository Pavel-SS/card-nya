import { AppRootSateType } from './store';

export type ReturnVoid = void;
export type ExtraArgumentNya = {};
export type GetAppStoreType = () => AppRootSateType;

export const tryCatch = async (
    log: () => void,
    setError: (error: string) => void
    ) => {
     try {
         await log()
     }catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message);
        setError(error)
     }
}