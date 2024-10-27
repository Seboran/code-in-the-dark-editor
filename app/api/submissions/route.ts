import { Submission } from '@/app/admin/columns';
import { NextRequest, NextResponse } from 'next/server';

import { Client, Databases } from 'node-appwrite';

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

export async function POST(req: NextRequest) {
  const submissionList = (await req.json()) as Submission[];

  submissionList.forEach((submission) =>
    databases.createDocument(
      APPWRITE_DATABASE_ID,
      APPWRITE_SUBMISSIONS_COLLECTION_ID,
      '',
      submission
    )
  );
  return NextResponse.json({
    message:
      'List of submissions successfully sent, get submission through get property',
    get: req.url + '/api/submissions',
  });
}
