import { Company } from "../models/company.models";

export const COMPANIES: Company[] = [
    {
        id: '1',
        name: 'Zoo Magique',
        faction: 'syndicate',
        server: 'Abaton',
        memberCount: 100,
        governor: 'ImQS',
        territory: 'Everfall',
        createdAt: '2023-01-16',
    },
    {
        id: '2',
        name: 'Mascarade',
        faction: 'marauders',
        server: 'Abaton',
        memberCount: 100,
        governor: 'Watha',
        territory: 'Brightwood',
        createdAt: '2023-01-16',
    },
    {
        id: '3',
        name: 'Skyline',
        faction: 'covenant',
        server: 'Abaton',
        memberCount: 100,
        governor: 'Migi',
        territory: 'Edenwood',
        createdAt: '2023-01-16',
    },
]