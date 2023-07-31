import {
  HorizontalScroller,
  HighlightItem,
  StoreSection,
  StoreItem,
  Highlights,
  ItemsGrid,
} from "../layout";
import { highlights, newIn, allItems } from "@/server/accessories";

export default function Page() {
  return (
    <>
      <Highlights>
        {highlights.map((item) => (
          <HighlightItem
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </Highlights>
      <StoreSection title="New In">
        <HorizontalScroller>
          {newIn.map((item) => (
            <StoreItem
              key={item.id}
              href={`accessories/product/${item.id}`}
              id={item.id}
              img={item.img}
              imgAlt={item.imgAlt}
              name={item.product}
              brand={item.brand}
              price={item.price}
            />
          ))}
        </HorizontalScroller>
      </StoreSection>
      <StoreSection title="All Items">
        <ItemsGrid>
          {allItems.map((item) => (
            <StoreItem
              key={item.id}
              href={`accessories/product/${item.id}`}
              id={item.id}
              img={item.img}
              imgAlt={item.imgAlt}
              name={item.product}
              brand={item.brand}
              price={item.price}
            />
          ))}
        </ItemsGrid>
      </StoreSection>
    </>
  );
}
