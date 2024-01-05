import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/libs/shadcn/utils";

type CardTestimonialProps = React.ComponentProps<typeof Card> & {
  cardHeader?: React.ReactNode;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
};

export default function CardTestimonia({
  cardHeader,
  cardContent,
  cardFooter,
  className,
  ...props
}: CardTestimonialProps) {
  return (
    <Card className={cn("w-[300px]", className)} {...props}>
      <CardHeader>{cardHeader}</CardHeader>
      <CardContent className="grid gap-4">{cardContent}</CardContent>
      <CardFooter>{cardFooter}</CardFooter>
    </Card>
  );
}
