[[vk::image_format("rgba32f")]]
RWTexture2D<float4> tex1 : register(u0);

[[vk::image_format("rgba8")]]
RWTexture2D<float4> tex2 : register(u1);

[[vk::image_format("r32f")]]
RWTexture1D<float> tex3 : register(u2);

[[vk::image_format("rgba16f")]]
RWTexture3D<float4> tex4;

[[vk::image_format("rgba32i")]]
RWTexture2D<int4> tex5;

[[vk::image_format("r32ui")]]
RWTexture2D<uint4> tex6;

[[vk::image_format("rgba8_snorm")]]
RWTexture2DArray<float4> tex7;

[[vk::image_format("r11f_g11f_b10f")]]
RWTexture2D<float4> tex8;

[[vk::image_format("rgb10_a2")]]
RWTexture2D<float4> tex9;

[[vk::image_format("rgba16ui")]] [[vk::binding(5, 1)]]
RWTexture2D<uint4> tex10;

struct PS_OUTPUT {
    float4 Color : SV_Target0;
};

PS_OUTPUT main()
{
    PS_OUTPUT psout;
    psout.Color = tex1[int2(0, 0)];
    return psout;
}
