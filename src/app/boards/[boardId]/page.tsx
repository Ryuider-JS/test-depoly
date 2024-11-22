/** @format */
'use client'

import { useParams } from 'next/navigation'

export default function BoardsDetailPage() {
	const { boardId } = useParams()

	return <div>안녕하세요 {boardId}번입니다.</div>
}
