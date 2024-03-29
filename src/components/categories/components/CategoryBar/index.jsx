import { CategoryLabel } from "../CategoryLabel";
import { useAppSelector } from "../../../../utils/hooks/useStore";

function CategoryBar() {

  const categories = useAppSelector(state => state.categories.all);

  return(
    <section className="w-full max-w-[620px] mt-16 mx-auto">
        <div className="flex flex-row justify-between items-end mb-7">
          <article className="flex flex-row items-end">
            <h2 className="font-sans font-bold text-[1.5rem] text-[#1B1A1E] mr-10">ALL NFTS</h2>
            <p className="fonts-sans font-medium text-[1rem] text-[#9B9DA0]">2,345,678 items</p>
          </article>

          <p className="font-sans text-[1.2rem] text-[#24D4FB] cursor-pointer hover:underline">See all</p>
        </div>

        <ul className="flex flex-row flex-wrap justify-start">
          {
            categories.map(cat => (
              <CategoryLabel key={cat.title} category={cat}/>
            ))
          }
        </ul>
    </section>
  );
}

export {
  CategoryBar
}