import React, { useEffect, Fragment } from "react";
import url from "../../utils/apiFetch";
import { Container } from "@material-ui/core";
import Location from "../../components/location/loaction";
import Pagination from "../../components/pagination/pagination";
import { pageSet } from "../../utils/context";
import Loading from "../../utils/loading/loading";
import ErrorMsg from "../../utils/error/error";

const Locations = ({ location }) => {
  const { currentPage } = pageSet(location.search);
  const api = `/location/?page=${currentPage}`;
  const [{ response, error, loading }, doFetch] = url(api);
  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);
  return (
    <Container>
      <div>
        {loading && <Loading />}
        {error && <ErrorMsg />}
        {!loading && !error && response && (
          <Fragment>
            <Pagination
              url={api}
              allPages={response.info.pages}
              currentPage={currentPage}
            />

            <Location locations={response.results} />
            <Pagination
              url={api}
              allPages={response.info.pages}
              currentPage={currentPage}
              error={error}
            />
          </Fragment>
        )}
      </div>
    </Container>
  );
};
export default Locations;
