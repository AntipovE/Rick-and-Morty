import React, { useEffect, Fragment } from "react";
import { Container } from "@material-ui/core";
import url from "../../utils/apiFetch";
import Charter from "../../components/charter/charter";
import Pagination from "../../components/pagination/pagination";
import { pageSet } from "../../utils/context";
import Loading from "../../utils/loading/loading";
import ErrorMsg from "../../utils/error/error";

const Charters = ({ location }) => {
  const { currentPage } = pageSet(location.search);
  const api = `/character/?page=${currentPage}`;
  const [{ response, error, loading }, doFetch] = url(api);

  useEffect(() => {
    doFetch();
  }, [doFetch, currentPage]);
  return (
    <Container>
      {loading && <Loading />}
      {error && <ErrorMsg/>}
      {!loading && response && (
        <Fragment>
          <Pagination
            url={api}
            allPages={response.info.pages}
            currentPage={currentPage}
          />
          <Charter charters={response.results} />
          <Pagination
            url={api}
            allPages={response.info.pages}
            currentPage={currentPage}
          />
        </Fragment>
      )}
    </Container>
  );
};
export default Charters;
