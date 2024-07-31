const Stats = ({ items }) => {
    if (!items.length) return (
                            <p className="stats">
                                <em>Start adding some items to your packing list 🚀</em>
                            </p>
                        );


    const itemsSum = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage = itemsSum > 0 ? Math.round((packedItems / itemsSum) * 100) : 0;
  
    return (
      <div className="stats">
        <p>
          {percentage === 100
            ? `You got everything! Ready to go ✈️`
            : ` 💼 You have ${itemsSum} on your list, and you already packed ${packedItems} (${percentage}%)`}
        </p>
      </div>
    );
  };
  
  export default Stats;
  