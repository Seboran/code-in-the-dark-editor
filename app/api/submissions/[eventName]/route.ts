import { Submission } from '@/app/admin/columns';
import { NextRequest, NextResponse } from 'next/server';

import { Client, Databases, Models, Query } from 'node-appwrite';

const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID!;
const APPWRITE_DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
const APPWRITE_SUBMISSIONS_COLLECTION_ID =
  process.env.APPWRITE_SUBMISSIONS_COLLECTION_ID!;
const APPWRITE_SUBMISSIONS_READ_TOKEN =
  process.env.APPWRITE_SUBMISSIONS_READ_TOKEN!;
const client = new Client()
  .setKey(APPWRITE_SUBMISSIONS_READ_TOKEN)
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);
let submissionList: Array<Submission> = [];

export async function GET(req: NextRequest) {
  await databases.listDocuments<
    Models.Document & Omit<Submission, 'eventId'> & { show: boolean }
  >(APPWRITE_DATABASE_ID, APPWRITE_SUBMISSIONS_COLLECTION_ID);
  // TODO : comment récupérer les votes de la bonne élection ? sûrement un paramétrage à donner, il faut un argument dans le get
  return NextResponse.json({ submissions: submissionList });
}
