import { columns, Submission } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Submission[]> {
  const submissionList: Submission[] = [
    {
      id: '1',
      userName: 'nirina',
      template: '<div>coucou</div>',
      eventName: 'entrainement',
      date: new Date('2024-10-12:14:13'),
    },
    {
      id: '12',
      userName: 'antoine',
      template: '<div>salut</div>',
      eventName: 'entrainement',
      date: new Date('2024-10-12:14:12'),
    },
    {
      id: '15',
      userName: 'fanny',
      template: '<div>au revoir</div>',
      eventName: 'entrainement',
      date: new Date('2024-10-12:13:56'),
    },
    {
      id: '123',
      userName: 'antoine',
      template: '<div>salut</div>',
      eventName: 'entrainement',
      date: new Date('2024-10-12:14:12'),
    },
    {
      id: '7',
      userName: 'fanny',
      template: '<div>au revoir</div>',
      eventName: 'entrainement',
      date: new Date('2024-10-12:13:56'),
    },
    {
      id: '32',
      userName: 'antoine',
      template: '<div>salut</div>',
      eventName: 'entrainement',
      date: new Date('2024-10-12:14:12'),
    },
    {
      id: '12',
      userName: 'fanny',
      template: '<div>au revoir</div>',
      eventName: 'entrainement',
      date: new Date('2024-10-12:13:56'),
    },
    {
      id: '90',
      userName: 'antoine',
      template: '<div>salut</div>',
      eventName: 'entrainement',
      date: new Date('2024-10-12:14:12'),
    },
    {
      id: '2319',
      userName: 'fanney',
      template: '<div>au revoir</div>',
      eventName: 'entrainement',
      date: new Date('2024-10-12:13:56'),
    },
    {
      id: '123',
      userName: 'antoazfdfine',
      template: '<div>salut</div>',
      eventName: 'Code in the dark - edition Nirina',
      date: new Date('2024-10-12:14:12'),
    },
    {
      id: '31',
      userName: 'fanwczany',
      template: '<div>au revoir</div>',
      eventName: 'Code in the dark - edition Nirina',
      date: new Date('2024-10-12:13:56'),
    },
    {
      id: '7491345',
      userName: 'antoidfsne',
      template: '<div>salut</div>',
      eventName: 'Code in the dark - edition Nirina',
      date: new Date('2024-10-12:14:12'),
    },
    {
      id: '278351',
      userName: 'fanntyytjy',
      template: '<div>au revoir</div>',
      eventName: 'Code in the dark - edition Nirina',
      date: new Date('2024-10-12:13:56'),
    },
  ];
  // Fetch data from your API here.
  return submissionList;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className='mx-auto p-10 w-full'>
      <h1 className='m-2'>Admin selection interface</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
