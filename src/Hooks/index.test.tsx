import { renderHook, waitFor } from "App.test";
import { useDebounce } from "./useDebounce";
import { debounceConstant } from "Constants/testConstants";

describe("test for debounce hook", () => {
  const { result } = renderHook(() =>
    useDebounce(debounceConstant.STRING_TEXT, debounceConstant.TIME)
  );
  it("should give result in 1000 milliseconds", async () => {
    expect(
      (result.current as unknown as { debounceValue: string }).debounceValue
    ).not.toBe(debounceConstant.STRING_TEXT);
    await waitFor(
      () => expect(result.current).toBe(debounceConstant.STRING_TEXT),
      {
        timeout: debounceConstant.TIME,
      }
    );
  });
});
