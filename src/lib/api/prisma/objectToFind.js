import * as yup from "yup";

let schema = yup.object().shape({
  keywords: yup.string(),
  parkings: yup.array().of(yup.number()),
  bathrooms: yup.array().of(yup.number()),
  rooms: yup.array().of(yup.number()),
  minSquareArea: yup.number(),
  maxSquareArea: yup.number(),
});

async function objectToFind(filters) {
  if (!(await schema.isValid(filters))) {
    return { error: "Schema not valid" };
  }

  const { keywords, minSquareArea, maxSquareArea } = filters;

  let AND = [
    {
      squareArea: {
        lte: maxSquareArea || 1000,
        gte: minSquareArea || 0,
      },
    },
  ];

  let OR = [];

  // For { keywords }
  if (keywords) {
    AND.push({ title: { search: keywords.replace(/ /g, "|") } });
  }

  // For { parkings, bathrooms, rooms }
  Object.entries(filters)
    .filter(([, v]) => Array.isArray(v))
    .map(([key, value]) => {
      if (value.indexOf(4) > -1) {
        OR.push({ [key]: { gte: 4 } });
        OR.push({ [key]: { in: value } });
      } else {
        AND.push({ [key]: { in: value } });
      }
    });

  if (AND.length > 0 && OR.length > 0) {
    return { AND, OR };
  }

  if (AND.length > 0) {
    return { AND };
  }

  if (OR.length > 0) {
    return { OR };
  }
}

export default objectToFind;
