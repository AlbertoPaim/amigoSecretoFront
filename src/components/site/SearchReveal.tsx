import { SearchResult } from "@/types/SearchResult";

type Props = {
    results: SearchResult;
}

export const SearchReveal = ({ results }: Props) => {
    return (
        <section>
            <p>{results.person.name}</p>
            <p>Parabéns, você tirou:</p>
            <p className="bg-blue-800 border-dashed  text-4xl border-white border-2 my-4 px-4 py-10">{results.personMatched.name}</p>
        </section>
    );
}