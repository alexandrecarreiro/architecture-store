function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `Erro ${statusCode}, tente novamente mais tarde.`
        : "Erro, tente novamente mais tarde."}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
