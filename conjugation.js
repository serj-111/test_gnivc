function Conjugation(verb, pronounce) {
  
  const conjugation1_exeptions = ["брить", "стелить"]
  const conjugation2_exeptions = ["гнать", "дышать", "держать", "зависеть", "видеть", "слышать", "обидеть", "терпеть", "вертеть", "ненавидеть", "смотреть"]
  const conjugation1_endings = ["ать", "оть", "уть", "еть", "ять", "ть"]
  const exeption = ["дышать", "держать", "слышать"]
  const third_persons = ["он", "она", "оно"]
  const vowels = ["а", "о", "э", "е", "и", "ы", "у", "ё", "ю", "я"]
  let result
  verb = verb.toLowerCase()
  pronounce = pronounce.toLowerCase()
  let ending = vowels.includes(verb[verb.length-3]) ? verb.slice(verb.length-3) : verb.slice(verb.length-2)
  let stem = vowels.includes(verb[verb.length-3]) ? verb.slice(0, verb.length-3) : verb.slice(0, verb.length-2)
  
  // Первое спряжение  
  if (!conjugation2_exeptions.includes(verb) && (conjugation1_endings.includes(ending) || conjugation1_exeptions.includes(verb))){
      if (third_persons.includes(pronounce)) {
        result = stem + "ет"
      } else if (pronounce === "я") {
        result = stem.slice(stem.length-1) === "в" ? stem.slice(0, stem.length-1) + "ю" : stem + "у"
      } else if (pronounce === "ты") {
        result = stem + "ешь"
      } else if (pronounce === "мы") {
        result = stem + "ем"
      } else if (pronounce === "вы") {
        result = stem + "ете"
      } else if (pronounce === "они") {
        result = stem.slice(stem.length-1) === "в" ? stem.slice(0, stem.length-1) + "ют" : stem + "ут"
      }
  // Второе спряжение  
  } else if (ending === "ить" || conjugation2_exeptions.includes(verb)) {
      if (third_persons.includes(pronounce)) {
        result = stem + "ит"
      } else if (pronounce === "я") {
        result = stem.slice(stem.length-1) === "в" ? stem + "лю" : stem + "у"
      } else if (pronounce === "ты") {
        result = stem + "ишь"
      } else if (pronounce === "мы") {
        result = stem + "им"
      } else if (pronounce === "вы") {
        result = stem + "ите"
      } else if (pronounce === "они") {
        if(exeption.includes(verb)) {
          result = stem + "ат"
        } else {
          result = stem.slice(stem.length-1) === "в" || conjugation2_exeptions.includes(verb) ? stem + "ят" : stem + "ат"
        }
      }
  }
  return result
}
console.log(Conjugation("Дышать", "Я"))
