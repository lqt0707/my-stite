import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { IArticleProps } from "pages/article/[articleId]";
import { CMSDOMAIN } from "utils";

const getArticleInfoData = (
  req: NextApiRequest,
  res: NextApiResponse<IArticleProps>
) => {
  const { articleId } = req.query;
  axios.get(`${CMSDOMAIN}/api/article-infos/${articleId}`).then((result) => {
    const data = result.data || {};
    res.status(200).json(data);
  });
};

export default getArticleInfoData;
