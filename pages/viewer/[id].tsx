import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

interface Props {
      dirs: string[];
}

const ViewPDF: NextPage<Props> = ({}) => {
      const router = useRouter();
      const { id } = router.query;

      // counter to double up the flipBook initialization
      const [loadedCount, setLoadedCount] = React.useState(0);

      useEffect(() => {
            setLoadedCount(loadedCount + 1);
      }, [id]);

      React.useEffect(() => {
            if (loadedCount == 1) {
                  var fileName = "summer2022.pdf";
                  var pdf = `/pdfs/${fileName}`;
                  var options = {
                        height: $("#flipbookContainer").height(),
                        duration: 300,
                  };

                  var flipBookContainer = $("#flipbookContainer") as any;
                  flipBookContainer.flipBook(pdf, options);
            }
      }, [loadedCount]);

      return <div id="flipbookContainer"></div>;
};

export default ViewPDF;
