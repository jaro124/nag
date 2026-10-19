import React, { useEffect, useRef, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Opis zdjęcia z nazwy pliku: "02-pomnik-granitowy.jpg" -> "Pomnik granitowy"
const opis = name => {
  const t = name.replace(/^\d+[-_ ]*/, "").replace(/[-_]+/g, " ").trim()
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : "Zdjęcie realizacji"
}

export default function Gallery({ zdjecia }) {
  const [idx, setIdx] = useState(null)
  const dialogRef = useRef(null)
  const n = zdjecia.length
  const otwarte = idx !== null

  // otwieranie / zamykanie natywnego dialogu
  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (otwarte && !d.open) d.showModal()
    if (!otwarte && d.open) d.close()
  }, [otwarte])

  // strzałki + kliknięcie w tło (backdrop)
  useEffect(() => {
    const d = dialogRef.current
    if (!d || !otwarte) return

    const onKeyDown = e => {
      if (e.key === "ArrowRight") setIdx(i => (i + 1) % n)
      if (e.key === "ArrowLeft") setIdx(i => (i - 1 + n) % n)
    }
    const onClick = e => {
      if (e.target === d) setIdx(null)
    }

    d.addEventListener("keydown", onKeyDown)
    d.addEventListener("click", onClick)
    return () => {
      d.removeEventListener("keydown", onKeyDown)
      d.removeEventListener("click", onClick)
    }
  }, [otwarte, n])

  if (n === 0) {
    return <p className="mt-8 italic text-sm text-gray-600 dark:text-gray-400">Zdjęcia realizacji pojawią się tutaj wkrótce.</p>
  }

  const krok = d => setIdx(i => (i + d + n) % n)
  const aktualne = otwarte ? zdjecia[idx] : null

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {zdjecia.map((z, i) => (
          <li key={z.id}>
            <button
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Powiększ zdjęcie: ${opis(z.name)}`}
              className="group block w-full overflow-hidden border border-zloto/30 hover:border-zloto"
            >
              <GatsbyImage
                image={getImage(z.childImageSharp.thumb)}
                alt={opis(z.name)}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setIdx(null)}
        aria-label="Podgląd zdjęcia"
        className="m-auto w-full max-w-5xl border border-zloto/50 bg-neutral-800 p-0 text-tekst backdrop:bg-black/90"
      >
        {aktualne && (
          <div className="p-3 sm:p-5">
            <GatsbyImage
              image={getImage(aktualne.childImageSharp.full)}
              alt={opis(aktualne.name)}
              style={{ maxHeight: "74vh" }}
              imgStyle={{ objectFit: "contain" }}
            />
            <div className="mt-4 flex flex-wrap text-gray-300 items-center justify-between gap-3">
              <p aria-live="polite" className="text-przygaszony">
                {opis(aktualne.name)} ({idx + 1} z {n})
              </p>
              <div className="flex gap-2">
                <button type="button" className="btn btn-ghost !py-2" onClick={() => krok(-1)}>Poprzednie</button>
                <button type="button" className="btn btn-ghost !py-2" onClick={() => krok(1)}>Następne</button>
                <button type="button" className="btn btn-primary !py-2" onClick={() => setIdx(null)}>Zamknij</button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}

