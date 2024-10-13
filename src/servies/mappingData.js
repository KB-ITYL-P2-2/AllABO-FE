export const checkCardMapping = checkCardData => {
  const mappingData = [];

  for (let checkCard of checkCardData) {
    mappingData.push({
      name: checkCard.checkCardName,
      content: checkCard.checkCardContent,
      data: {
        카테고리: checkCard.checkCardCategory,
      },
      url: {
        imageUrl: checkCard.checkCardImageUrl,
        pageUrl: checkCard.checkCardDetailUrl,
      },
    });
  }

  return mappingData;
};

export const creditCardMapping = data => {
  const mappingData = [];

  for (let d of data) {
    mappingData.push({
      name: d.creditCardName,
      content: d.creditCardContent,
      data: {
        카테고리: d.creditCardCategory,
        연회비: d.creditCardAnnualFee.toLocaleString(),
      },
      url: {
        imageUrl: d.creditCardImageUrl,
        pageUrl: d.creditCardDetailUrl,
      },
    });
  }

  return mappingData;
};

export const loanMapping = data => {
  const mappingData = [];

  for (let d of data) {
    mappingData.push({
      name: d.loanName,
      content: d.loanContent,
      data: {
        "대출 금액": d.loanAmount,
        "개설 채널": d.loanChannel,
        조건: d.loanKeyword,
      },
      url: {
        imageUrl: "/images/common/money.png",
        pageUrl: d.loanUrl,
      },
    });
  }

  return mappingData;
};

export const depositMapping = data => {
  const mappingData = [];

  for (let d of data) {
    mappingData.push({
      name: d.depositName,
      content: d.depositContent,
      data: {
        "기간 및 이율": d.depositInterestRate,
        "최소 예치금": d.depositMinAmount.toLocaleString(),
      },
      url: {
        imageUrl: d.depositCategory == "예금" ? "/images/common/money.png" : "/images/common/bank.png",
        pageUrl: d.depositUrl,
      },
    });
  }

  return mappingData;
};

export const insuranceMapping = data => {
  const mappingData = [];

  for (let d of data) {
    mappingData.push({
      name: d.insuranceName,
      content: "KB 보험",
      data: {
        "보험 종류" : d.insuranceType
      },
      url: {
        imageUrl: "/images/common/bank.png",
        pageUrl: d.insuranceUrl,
      },
    });
  }

  return mappingData;
};
