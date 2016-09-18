export const headline = function ({headline}) {
  return headline.headline
}

export const article = function ({article}) {
  return article
}

export const tags = ({tags}) => tags.tagSet

export const tagContentList = ({tagContentList}) => tagContentList.tagContentList
export const tagContentListId = ({tagContentList}) => tagContentList.tagId

export const commentsList = ({commentsList}) => commentsList.commentsList
