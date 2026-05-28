import './App.css'
import BlockList from './components/BlockList';
import Preview from './components/Preview';
import useDocStore from './store/useDocStore'

function App() {
  const { addBlock } = useDocStore();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">

      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
        <h1 className="text-lg font-semibold text-zinc-100">Doc Builder</h1>
        <button
          onClick={addBlock}
          className="text-sm bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
        >
          + افزودن بلاک
        </button>
      </header>

      <div className="flex flex-row-reverse overflow-hidden w-full">

        <div className="w-[60%] flex flex-col overflow-y-auto border-l border-zinc-800 p-4 gap-4">
          <BlockList />
        </div>

        <div className="w-[40%] overflow-y-auto bg-zinc-900">
          <div className="sticky top-0 px-6 py-3 border-b border-zinc-800 bg-zinc-900 z-10">
            <span className="text-xs text-zinc-500 uppercase tracking-widest">پیش‌نمایش</span>
          </div>
          <Preview />
        </div>

      </div>
    </div>
  )
}

export default App