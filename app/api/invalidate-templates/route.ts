import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { RevalidateCacheEnum } from '../../../constants/RevalidateCacheEnum';

export async function POST() {
  revalidateTag(RevalidateCacheEnum.templates);

  return NextResponse.json({});
}
