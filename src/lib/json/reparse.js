function reparse(json) {
  return JSON.parse(JSON.stringify(json));
}

export default reparse;
