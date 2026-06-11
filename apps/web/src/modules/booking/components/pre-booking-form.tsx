"use client";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitPreBookingAction } from "@/modules/booking/actions/submit-pre-booking-action";
import { MODALITY_OPTIONS } from "@/modules/booking/data/modality-options";
import {
  preBookingSchema,
  type PreBookingInput,
} from "@/modules/booking/schemas/pre-booking-schema";

export function PreBookingForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<PreBookingInput>({
    resolver: zodResolver(preBookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      modality: undefined,
    },
  });

  const onSubmit = (values: PreBookingInput) => {
    startTransition(async () => {
      const result = await submitPreBookingAction(values);

      if (result.success) {
        toast.success(result.message);
        form.reset();
        return;
      }

      toast.error(result.message);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-6 sm:grid-cols-2"
        noValidate
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>Nome completo</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Seu nome"
                  autoComplete="name"
                  className="rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  className="rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone / WhatsApp</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  placeholder="(00) 00000-0000"
                  autoComplete="tel"
                  className="rounded-xl"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="modality"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>Modalidade desejada</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full rounded-xl">
                    <SelectValue placeholder="Selecione a modalidade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {MODALITY_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="sm:col-span-2">
          <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isPending}>
            {isPending ? "Enviando..." : "Continuar para horários"}
          </Button>
          <p className="mt-3 text-xs leading-6 text-muted-foreground">
            Na próxima etapa você escolherá o dia e horário disponíveis na agenda
            do professor.
          </p>
        </div>
      </form>
    </Form>
  );
}
