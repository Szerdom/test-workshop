import { CircularProgress } from "@mui/material";
import { selectIsExpandedStatus } from "../accordion.store";
import { useGetElementDetailsQuery } from "../services/elements-service";
import { useAppSelector } from "../store";

type DetailsProps = {
  name: string;
};
export const Details = ({ name }: DetailsProps) => {
  const isExpanded = useAppSelector((state) =>
    selectIsExpandedStatus(state, name)
  );
  const { data, isFetching } = useGetElementDetailsQuery(name, {
    skip: !isExpanded,
  });

  if (isFetching) return <CircularProgress />;
};
