import React, { useEffect, Fragment } from "react";
import url from "../../utils/apiFetch";
import { Container } from "@material-ui/core";
import Episode from "../../components/episode/episode";
import Pagination from "../../components/pagination/pagination";
import { pageSet } from "../../utils/context";
import Loading from "../../utils/loading/loading";
import ErrorMsg from "../../utils/error/error";

const Episodes = ({ location }) => {
  const { currentPage } = pageSet(location.search);
  const api = `/episode/?page=${currentPage}`;
  const [{ response, error, loading }, doFetch] = url(api);

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);
  return (
    <Container>
      <div>
        {loading && <Loading />}
        {error && <ErrorMsg/>}
        {!loading && response && (
          <Fragment>
            <Pagination
              url={api}
              allPages={response.info.pages}
              currentPage={currentPage}
            />

            <Episode episodes={response.results} />
            <Pagination
              url={api}
              allPages={response.info.pages}
              currentPage={currentPage}
            />
          </Fragment>
        )}
      </div>
    </Container>
  );
};
export default Episodes;
