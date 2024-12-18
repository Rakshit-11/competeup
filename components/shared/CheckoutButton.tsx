"use client"

import { IEvent } from '@/lib/database/models/event.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import Checkout from './Checkout'

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  // Check if the user is the organizer
  const isOrganizer = userId === event.organizer._id;

  // State for checking registration status
  const [isRegistered, setIsRegistered] = useState<boolean | null>(null);

  useEffect(() => {
    const checkRegistrationStatus = async () => {
      try {
        const response = await fetch(`/api/registrations/${event._id}/${userId}`);
        const data = await response.json();
        if (data.success) {
          setIsRegistered(data.registered);
        } else {
          setIsRegistered(false);
        }
      } catch (error) {
        console.error('Error checking registration:', error);
        setIsRegistered(false);
      }
    };

    if (userId) {
      checkRegistrationStatus();
    }
  }, [userId, event._id]);

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">Sorry, tickets are no longer available.</p>
      ) : (
        <>
          {isOrganizer ? (
            <p className="p-2 text-red-400">You cannot register for your own event.</p>
          ) : (
            <>
              {isRegistered !== null ? (
                isRegistered ? (
                  <p className="p-2 text-green-500">You are already registered for this event!</p>
                ) : (
                  <>
                    <SignedOut>
                      <Button asChild className="button rounded-full" size="lg">
                        <Link href="/sign-in">Register</Link>
                      </Button>
                    </SignedOut>

                    <SignedIn>
                      <Checkout event={event} userId={userId} />
                    </SignedIn>
                  </>
                )
              ) : (
                <p>Loading registration status...</p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
