export default function Ranking({ username }) {

    const ranking = require("./../data/league2/"+username+".json")
    const current_tribal = require("./../data/league2/current_tribal.json")
    const remaining = current_tribal.length


    const getColor = (castaway) => {
        let c = current_tribal.filter(ct => ct.id === castaway.id);
        return c.length > 0 ? `bg-${castaway.tribeColor}` : 'bg-Slate'
    }

    const getCutoff = (index) => {
        console.log(remaining)
        console.log(index)
        if (index === remaining) {return 'cutoff out'}
        if (index >= remaining) {return 'out'}
        else {return ''}
    }

    return (
        <div className="ranking-container">
            <h2 className="table-heading">{`${username}'s Rankings`}</h2>
            <table className="table table-hover table-sm" >
                <thead className="table-header">
                    <tr>
                        <th>Rank</th>
                        <th></th>
                        <th>Castaway</th>
                    </tr>
                </thead>
                <tbody>
                    {ranking.castaways.map((castaway, index) => (
                        <tr className={`${getColor(castaway)} ${getCutoff(index)}`} key={index}>
                            <td>{index + 1}</td>
                            <td className="headshot"><img src={castaway.iconURL} alt='Castaway Portrait' /></td><td><a href={castaway.pageURL} title={`${castaway.firstName}'s Survivor Wiki page`} target="_blank" rel="noreferrer" to={`/castaway${castaway.id}`}><span>{castaway.firstName + " " + castaway.lastName}</span></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}