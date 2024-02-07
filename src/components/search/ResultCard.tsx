import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Chip
} from '@nextui-org/react';
import { Hit } from '../../types';

function ResultCard({ recipe }: Hit) {
  return (
    <Card isFooterBlurred className="max-w-96">
      <CardHeader className="text-white absolute z-10 top-1 flex-row gap-2 !items-start">
        <Chip>{recipe.cuisineType}</Chip>
        <Chip>{recipe.dishType}</Chip>
      </CardHeader>
      <Image
        removeWrapper
        isZoomed
        src={recipe.image}
        className="z-0 w-full h-full object-cover"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <h2>{recipe.label}</h2>
          <p className="text-black">Stuff about salad and stuff</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          See more
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ResultCard;
