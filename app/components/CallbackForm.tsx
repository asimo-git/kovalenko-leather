"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast, Toaster } from "sonner";

export default function CallbackForm() {
  const [phone, setPhone] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sentSuccessfully, setSentSuccessfully] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setIsSending(true);
    try {
      console.log(phone);
      const res = await fetch("/api/sendmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });

      if (res.ok) {
        setSentSuccessfully(true);
        setPhone("");
        toast.success(
          "Успешно отправлено. Мы свяжемся с вами в ближайшее время."
        );
      } else {
        toast.error("Ошибка при отправке. Попробуйте позже.");
      }
    } catch (err) {
      console.log(err);
      toast.error("Ошибка соединения");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-muted p-6 rounded-xl shadow space-y-4"
    >
      <h3 className="text-xl font-semibold mb-2 text-center">
        Или оставьте свой номер — мы перезвоним
      </h3>

      <div>
        <Input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (___) ___-__-__"
          className="mt-1"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSending}>
        {isSending
          ? "Отправка..."
          : sentSuccessfully
          ? "Отправлено!"
          : "Перезвоните мне"}
      </Button>
      <Toaster richColors />
    </form>
  );
}
