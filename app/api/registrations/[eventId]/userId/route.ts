// /pages/api/registrations/[eventId]/[userId]/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database';
import { ObjectId } from 'mongodb';

export async function GET(req: Request, { params }: { params: { eventId: string; userId: string } }) {
  const { eventId, userId } = params;

  if (!ObjectId.isValid(eventId) || !ObjectId.isValid(userId)) {
    return NextResponse.json({ success: false, error: 'Invalid event or user ID.' }, { status: 400 });
  }

  try {
    const { db } = await connectToDatabase();

    const registration = await db.collection('orders').findOne({
      event: new ObjectId(eventId),
      buyer: new ObjectId(userId),
    });

    if (registration) {
      return NextResponse.json({ success: true, registered: true });
    } else {
      return NextResponse.json({ success: true, registered: false });
    }
  } catch (error) {
    console.error('Error checking registration:', error);
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 });
  }
}
