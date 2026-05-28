// components/BlockList.tsx
import useDocStore from '../store/useDocStore'
import BlockEditor from './BlockEditor'

export default function BlockList() {
    const { blocks } = useDocStore()

    return (
        <div>
            {blocks.map((block) => (
                <BlockEditor key={block.id} block={block} />
            ))}
        </div>
    )
}