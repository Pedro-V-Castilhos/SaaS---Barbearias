import Image from "next/image";
import { BarbershopService } from "../generated/prisma/client";
import { Button } from "./ui/button";

interface ServiceCardProps {
  service: BarbershopService;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(service.priceInCents / 100);

  return (
    <div className="flex w-full items-center gap-3 rounded-2xl border border-solid border-secondary bg-card p-3">
      <div className="relative h-[110px] w-[110px] flex-shrink-0 overflow-hidden rounded-[10px]">
        <Image
          src={service.imageUrl}
          alt={service.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between self-stretch">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold leading-[1.4] text-card-foreground">
            {service.name}
          </h3>
          <p className="text-sm leading-[1.4] text-muted-foreground line-clamp-2">
            {service.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold leading-[1.4] text-card-foreground">
            {formattedPrice}
          </p>
          <Button className="rounded-full bg-primary px-4 py-2 text-sm font-bold leading-[1.4] text-primary-foreground">
            Reservar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
