// components/HumainsList.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface Humain {
  id: string;
  subject: string;
  name: string;
  topic: string;
  duration: number;
}

interface HumainsListProps {
  title: string;
  humains?: Humain[];
  classNames?: string;
}

const HumainsList = ({ title, humains, classNames }: HumainsListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl">{title}</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3 max-md:hidden">Lessons</TableHead>
            <TableHead className="text-lg max-md:hidden">Subject</TableHead>
            <TableHead className="text-lg text-right max-md:hidden">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {humains?.map(
            ({ id, subject, name, topic, duration }, index) => (
              <TableRow key={`${id}-${index}`}>
                <TableCell>
                  <Link href={`/humains/${id}`}>
                    <div className="flex items-center gap-2">
                      <div
                        className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                        style={{ backgroundColor: "white" }}
                      >
                        <Image
                          src={`/icons/${subject}.svg`}
                          alt={subject}
                          width={35}
                          height={35}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-4 w-full">
                        <p className="font-bold text-2xl">{name}</p>


                        <div className="subject-badge w-fit lg:hidden flex items-center ">
                               {subject}
                         </div>

                        

                        </div>
                        <p className="text-lg">{topic}</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center gap-2 w-full justify-end lg:hidden">
                    <Image
                      src="/icons/clock.svg"
                      alt="minutes"
                      width={14}
                      height={14}
                      className=""
                    />
                    <p className="text-lg">
                      {duration} <span className="">m</span>
                    </p>
                    
                  </div>
                </TableCell>

                <TableCell className="max-md:hidden">
                  <div className="subject-badge w-fit max-md:hidden">
                    {subject}
                  </div>
                  <div
                    className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                    style={{ backgroundColor: "white" }}
                  >
                    <Image
                      src={`/icons/${subject}.svg`}
                      alt={subject}
                      width={18}
                      height={18}
                    />
                  </div>
                </TableCell>

                <TableCell  className="max-md:hidden">
                  <div className="flex items-center gap-2 w-full justify-end">
                    <Image
                      src="/icons/clock.svg"
                      alt="minutes"
                      width={14}
                      height={14}
                      className=""
                    />
                    <p className="text-lg">
                      {duration} <span className="max-md:hidden">min</span> 
                    </p>
                    
                  </div>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </article>
  );
};

export default HumainsList;
