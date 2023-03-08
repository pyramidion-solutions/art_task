import { CustomButton } from './button';

interface CanapesProps {
  name: string;
  author?: string;
  chain?: string;
  waitlist: boolean;
  imgSrc: string;
  category?: string;
  date?: string;
}
export const CanapesCard = ({ item }: { item: CanapesProps }) => {
  return (
    <div className="h-[340px] w-[250px] shadow-[0px_6px_20px_0px_rgba(0,0,0,0.2)] p-6 rounded-xl m-6">
      <img src={item.imgSrc} alt="cap1" className="m-auto" />
      <div className="flex flex-col gap-1 mt-2">
        {item?.category && (
          <p className="text-[11px] leading-[10px] text-black">
            {item.category}
          </p>
        )}
        <p className="text-[20px] leading-[20px] text-black">{item.name}</p>
        {item?.author && (
          <p className="text-[14px] leading-[16px] text-[#707070]">
            {item.author}
          </p>
        )}
      </div>
      {item?.date ? (
        <div className="flex flex-row mt-4">
          <p className="text-[11px] text-[#ba7e86] leading-[14px]">
            Date:&nbsp;{item.date}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 justify-between mt-4">
          <p className="text-[18px] leading-[20px] text-[#ba7e86] font-bold flex items-center">
            {item.chain}
          </p>
          {item?.waitlist && (
            <CustomButton
              name="Waitlist"
              className="rounded-2xl text-white bg-[#6f6f6f] p-2"
            />
          )}
        </div>
      )}
    </div>
  );
};
