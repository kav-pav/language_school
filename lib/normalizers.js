export function checkResponse(obj) {
  if (obj.responseUser && !obj.responseSchool) {
    return {
      message: "Problem z wyslaniem wiadomosci. Prosimy o kontakt telefoniczny",
      messageType: false
    };
  }
  if (!obj.responseUser && !obj.responseSchool) {
    return {
      message: "Problem z wyslaniem wiadomosci. Prosimy o kontakt telefoniczny",
      messageType: false
    };
  }
  if (!obj.responseUser && obj.responseSchool) {
    return {
      message:
        "Twoja wiadomosc zostala wyslana. Skontaktujemy sie z Toba najszybciej jak to mozliwe",
      messageType: true
    };
  }
  if (obj.responseUser && obj.responseSchool) {
    return {
      message:
        "Twoja wiadomosc zostala wyslana. Skontaktujemy sie z Toba najszybciej jak to mozliwe",
      messageType: true
    };
  }
}
