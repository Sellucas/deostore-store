"use client";

import React, { useEffect, useState } from "react";
import { Bell, ShoppingCart, User2 } from "lucide-react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-2">
      <Button className="px-2">
        <User2 size={20} />
      </Button>
      <Button className="px-2 mr-2">
        <Bell size={20} />
      </Button>
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingCart size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          ({cart.items.length})
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
