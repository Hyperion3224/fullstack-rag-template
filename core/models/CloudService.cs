using Microsoft.Extensions.VectorData;

namespace core;

public class CloudService 
{
    [VectorStoreKey]
    public int Key { get; set; }

    [VectorStoreData]
    public string Name { get; set; }


    [VectorStoreData]
    public string Description { get; set; }

    [VectorStoreVector(
        dimensions: 384,
        DistanceFunction = DistanceFunction.CosineSimilarity
    )]
    public ReadOnlyMemory<float> Vector {get; set; }

}
