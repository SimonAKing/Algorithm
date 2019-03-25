const parseData = ({ rows, metaData }, p = metaData.map(meta => meta.name)) =>
	Array.from({ length: rows.length }, (_, i) =>
		rows[i].reduce((r, k, j) => ((r[p[j]] = k), r), {})
	)
