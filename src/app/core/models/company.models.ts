export interface Company {
    id: string;
    name: string;
    faction: 'marauders' | 'syndicate' | 'covenant';
    server: string;
    memberCount: number;
    governor: string;
    territory?: string;
    createdAt: string;
}