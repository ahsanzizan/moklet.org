import ArrowLeft from "@/app/(main)/berita/_components/icons/ArrowLeft";
import ArrowRight from "@/app/(main)/berita/_components/icons/ArrowRight";
import LinkButton from "@/app/_components/global/Button";
import { P } from "@/app/_components/global/Text";

export default function PageNav({
  currentPage,
  totalPage,
}: {
  currentPage: number;
  totalPage: number;
}) {
  if (currentPage > totalPage) currentPage = totalPage;

  return (
    <div className="flex gap-[34px] justify-center items-center">
      <LinkButton
        variant="primary"
        href={`/admin/link?page=${currentPage <= 1 ? currentPage : currentPage - 1}`}
      >
        <ArrowLeft />
      </LinkButton>
      <div className="flex gap-[34px]">
        <div className="flex flex-col items-center">
          <P className="text-base text-black">
            Page {currentPage} of {totalPage}
          </P>
        </div>
      </div>
      <LinkButton
        variant="primary"
        href={`/admin/link?page=${currentPage >= totalPage ? currentPage : currentPage + 1}`}
      >
        <ArrowRight />
      </LinkButton>
    </div>
  );
}
